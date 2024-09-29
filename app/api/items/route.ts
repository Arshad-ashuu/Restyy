import { NextRequest, NextResponse } from "next/server";

let items: { id: number; name: string }[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// GET: Fetch all items
export async function GET() {
  return NextResponse.json(items);
}

// POST: Add a new item
export async function POST(req: NextRequest) {
  const body = await req.json();
  const newItem = { id: Date.now(), name: body.name };
  items.push(newItem);
  return NextResponse.json(newItem, { status: 201 });
}

// PUT: Update an item
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const item = items.find((i) => i.id === body.id);

  if (!item) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  item.name = body.name;
  return NextResponse.json(item);
}

// DELETE: Remove an item
export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const index = items.findIndex((i) => i.id === body.id);

  if (index === -1) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  const deletedItem = items.splice(index, 1);
  return NextResponse.json(deletedItem[0]);
}
