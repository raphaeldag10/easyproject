// app/project/[id]/page.tsx

export default async function ProjectPage({params,}:{params: Promise<{id: string}>}){
    const {id} = await params
    return <h1 className="text-2x1 font-bold">Projeto ID: {id}</h1>
}
    
