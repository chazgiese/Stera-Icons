import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SearchRegularProps = Omit<IconBaseProps, 'children'>;

const SearchRegular = memo(
  forwardRef<SVGSVGElement, SearchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="search" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.88 2.13a8.75 8.75 0 0 1 6.85 14.18l3.85 3.86a1 1 0 1 1-1.41 1.41l-3.86-3.85a8.75 8.75 0 1 1-5.44-15.6m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchRegular.displayName = 'SearchRegular';

// Triple export pattern (lucide-react style)
export { SearchRegular, SearchRegular as SearchRegularIcon, SearchRegular as SiSearchRegular };
export type { SearchRegularProps };
