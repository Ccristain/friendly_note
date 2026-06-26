export default async function NotepadDetails({
  params,
}: {
  params: Promise<{ notepadId: string }>;
}) {
  const notepadId = (await params).notepadId;
  return (
    <>
      <h1 className="text-3xl font-bold">Note: {notepadId}</h1>
    </>
  );
}
