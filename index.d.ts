export interface SearchOptions {
	term: string;
	country: string;
	media?: string;
	entity?: string;
	attribute?: string;
	callback?: string;
	limit?: number;
	lang?: string;
	version?: number;
	explicit?: number;
}

export interface LookupOptions {
	id: number;
	amgArtistId: number;
	amgAlbumId: number;
	amgVideoId: number;
	isbn: number;
	entity: string;
	limit: number;
	sort: string;
	upc: number;
	country: string;
}

export function search(params: SearchOptions): Promise<Array<Object>>;
export function lookup(params: LookupOptions): Promise<Array<Object>>;