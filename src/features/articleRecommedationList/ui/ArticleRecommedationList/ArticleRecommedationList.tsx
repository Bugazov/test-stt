import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommedationList } from '../../api/articleRecommedationApi';

interface ArticleRecommedationListProps {
    className?: string;
}

export const ArticleRecommedationList = memo((props: ArticleRecommedationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data, error } = useArticleRecommedationList(3);
    console.log(data);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                isLoading={isLoading}
                articles={data}
                target="_blank"
            />

        </VStack>
    );
});
