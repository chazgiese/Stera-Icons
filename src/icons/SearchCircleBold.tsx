import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleBoldProps = Omit<IconBaseProps, 'children'>;

const SearchCircleBold = memo(
  forwardRef<SVGSVGElement, SearchCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle-bold" {...props}>
      <path fillRule="evenodd" d="M11.12 6.75a4.37 4.37 0 0 1 3.84 6.44l1.67 1.68a1.25 1.25 0 0 1-1.76 1.76l-1.68-1.67q-.93.52-2.07.53a4.37 4.37 0 0 1 0-8.74m0 2a2.37 2.37 0 1 0 0 4.74 2.37 2.37 0 0 0 0-4.74" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleBold.displayName = 'SearchCircleBold';

// Triple export pattern (lucide-react style)
export { SearchCircleBold, SearchCircleBold as SearchCircleBoldIcon, SearchCircleBold as SiSearchCircleBold };
export default SearchCircleBold;
export type { SearchCircleBoldProps };
