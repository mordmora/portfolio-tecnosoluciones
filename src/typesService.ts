// Estructuración de las Cards de Servicios ofrecidos
export type ServiceProps= {
    id:string;
    icon:React.ReactNode;
    title:string;
    description:string
}

export type ListOfServiceCard = ServiceProps[];


// Estructuración de Cards de Proyectos ofrecidos
export type ProjecTypes = {
    id: string;
    img: string;
    title: string;
    description: string;
    url: string;
}

export type ListOfProjects = ProjecTypes[];

