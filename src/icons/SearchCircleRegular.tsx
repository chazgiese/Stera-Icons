import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleRegularProps = Omit<IconBaseProps, 'children'>;

const SearchCircleRegular = memo(
  forwardRef<SVGSVGElement, SearchCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle" {...props}>
      <path fillRule="evenodd" d="M11.12 7a4.12 4.12 0 0 1 3.53 6.24l1.8 1.8a1 1 0 0 1-1.4 1.42l-1.81-1.81A4.12 4.12 0 1 1 11.12 7m0 1.5a2.62 2.62 0 1 0 0 5.24 2.62 2.62 0 0 0 0-5.24" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleRegular.displayName = 'SearchCircleRegular';

// Triple export pattern (lucide-react style)
export { SearchCircleRegular, SearchCircleRegular as SearchCircleRegularIcon, SearchCircleRegular as SiSearchCircleRegular };
export default SearchCircleRegular;
export type { SearchCircleRegularProps };
