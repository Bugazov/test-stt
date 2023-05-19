import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

const articleRecommedationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommedationList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),

});

export const useArticleRecommedationList = articleRecommedationApi.useGetRecommedationListQuery;
