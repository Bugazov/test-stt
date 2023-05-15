import { rtkApi } from 'shared/api/rtkApi';

const articleRecommedationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommedationList: build.query({
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
