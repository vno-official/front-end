export async function GET() {

  const sampleCategories = [
    {
      id: 1,
      name: "Category 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Category 2",
      description: "Description 2",
    },
    {
      id: 3,
      name: "Category 3",
      description: "Description 3",
    },
  ];

  return new Response(JSON.stringify(sampleCategories));
}
