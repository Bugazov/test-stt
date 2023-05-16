import { rtkApi } from 'shared/api/rtkApi';
var articleRecommedationApi = rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getRecommedationList: build.query({
            query: function (limit) { return ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }); },
        }),
    }); },
});
export var useArticleRecommedationList = articleRecommedationApi.useGetRecommedationListQuery;
