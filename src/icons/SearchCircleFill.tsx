import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleFillProps = Omit<IconBaseProps, 'children'>;

const SearchCircleFill = memo(
  forwardRef<SVGSVGElement, SearchCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle-fill" {...props}>
      <path d="M11.12 8.75a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.88 4.75a4.37 4.37 0 1 0 2.07 8.21l1.68 1.67a1.25 1.25 0 0 0 1.76-1.76l-1.67-1.68q.52-.93.53-2.07a4.37 4.37 0 0 0-4.37-4.37" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleFill.displayName = 'SearchCircleFill';

// Triple export pattern (lucide-react style)
export { SearchCircleFill, SearchCircleFill as SearchCircleFillIcon, SearchCircleFill as SiSearchCircleFill };
export default SearchCircleFill;
export type { SearchCircleFillProps };
