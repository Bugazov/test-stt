import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (

        <Page>
            {t('Главная страница')}
            <RatingCard
                title="Как вам статья"
                feedbackTitle="Оставьте отзыв"
            />
        </Page>
    );
};

export default MainPage;
