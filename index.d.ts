export interface SearchResult {
	resultCount: number;
	results: Array<SearchResultItem>
}

export interface SearchResultItem {
	wrapperType: string;
	kind: string;
	artistId: number;
	collectionId: number;
	trackId: number;
	artistName: string;
	collectionName: string;
	trackName: string;
	collectionCensoredName: string;
	trackCensoredName: string;
	artistViewUrl: string;
	
	collectionViewUrl: string;
	trackViewUrl: string;
	previewUrl: string;
	artworkUrl30: string;
	artworkUrl60: string;
	artworkUrl100: string;
	collectionPrice: number;
	trackPrice: number;
	collectionHdPrice: number;
	trackHdPrice: number;
	releaseDate: string;
	collectionExplicitness: string;
	trackExplicitness: string;
	discCount: number;
	discNumber: number;
	trackCount: number;
	trackNumber: number;
	trackTimeMillis: number;
	country: string;
	currency: string;
	primaryGenreName: string;
	contentAdvisoryRating: string;
	shortDescription: string;
	longDescription: string;
}

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

export function search(params: SearchOptions): Promise<SearchResult>;
export function lookup(params: LookupOptions): Promise<Array<Object>>;