import { ProjectDetail } from "../../../src/app/pages/ProjectDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectDetail id={id} />;
}

