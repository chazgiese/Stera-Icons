import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchFillProps = Omit<IconBaseProps, 'children'>;

const SearchFill = memo(
  forwardRef<SVGSVGElement, SearchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.75 1.25a9.5 9.5 0 0 1 7.98 14.65l3.43 3.44a2 2 0 1 1-2.82 2.82l-3.44-3.43a9.5 9.5 0 1 1-5.15-17.48m0 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchFill.displayName = 'SearchFill';

// Triple export pattern (lucide-react style)
export { SearchFill, SearchFill as SearchFillIcon, SearchFill as SiSearchFill };
export default SearchFill;
export type { SearchFillProps };
