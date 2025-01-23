import { QUERY_KEY } from '@/constants';
import { LOCALE } from '@/enums/common';

export const defaultPlatformParam = {
    language: LOCALE.EN,
};

export const platformKeys = {
    all: [QUERY_KEY.PLATFORM.KEY],
    getList: [QUERY_KEY.PLATFORM.KEY, QUERY_KEY.PLATFORM.GET_PLATFORM_LIST],
    getDetail: [QUERY_KEY.PLATFORM.KEY, QUERY_KEY.PLATFORM.GET_PLATFORM_DETAIL],
};
