export interface Link {
    id: number;
    uuid: string;
    slug: string;
    path: string | null;
    parent_id: number | null;
    name: string;
    is_folder: boolean;
    published: boolean;
    is_startpage: boolean;
    position: number;
    real_path: string;
}

export interface Links {
    [key: string]: Link; // Key is string (UUID), value is Link interface
}

export type PageData = {
    links: Links;
}
