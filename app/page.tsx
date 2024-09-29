"use client";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Dropdown from "./components/Dropdown";
import clsx from "clsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Import syntax highlighter
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"; // Import a theme
import Footer from "./components/Footer";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export default function Home() {
  const [apiUrl, setApiUrl] = useState<string>("");
  const [httpMethod, setHttpMethod] = useState<HttpMethod>("GET");
  const [requestBody, setRequestBody] = useState<string>("");
  const [responseData, setResponseData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const handleApiRequest = async () => {
    try {
      const response: AxiosResponse = await axios({
        method: httpMethod,
        url: apiUrl,
        data: ["POST", "PUT", "DELETE"].includes(httpMethod)
          ? JSON.parse(requestBody)
          : undefined,
      });
      setResponseData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response ? err.response.data : "Error occurred");
      setResponseData(null);
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-center items-center ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-happy ">Restyy</h1>
      </div>

      <div className="flex items-center space-x-2 my-4">
        <Dropdown setHttpMethod={setHttpMethod} httpMethod={httpMethod} />

        <input
          type="text"
          placeholder="Enter API URL"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          className={clsx(
            "block flex-grow resize-none rounded-lg border-none focus:outline-double bg-white/5 py-2  px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        />

        <button
          onClick={handleApiRequest}
          className="bg-white rounded-lg text-black px-4 py-2"
        >
          Send
        </button>
      </div>

      {["POST", "PUT", "DELETE"].includes(httpMethod) && (
        <div className="my-4">
          <textarea
            placeholder='Enter request body as JSON (e.g., {"name": "Item 1"})'
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none focus:outline-double bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            rows={8}
          />
        </div>
      )}

      {/* Syntax-highlighted JSON response */}
      {responseData && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Response</h2>
          <SyntaxHighlighter language="json" style={tomorrow} wrapLines>
            {JSON.stringify(responseData, null, 2)}
          </SyntaxHighlighter>
        </div>
      )}

      {error && (
        <div className="mt-6 text-red-500">
          <h2>Error</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
      <Footer />
    </div>
  );
}
