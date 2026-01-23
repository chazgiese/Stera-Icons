import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-fill-duotone" {...props}>
      <path fill="currentColor" d="M22.16 19.34a2 2 0 1 1-2.82 2.82l-3.44-3.43a10 10 0 0 0 2.83-2.83z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.75 1.25a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19m0 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchFillDuotone.displayName = 'SearchFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchFillDuotone, SearchFillDuotone as SearchFillDuotoneIcon, SearchFillDuotone as SiSearchFillDuotone };
export default SearchFillDuotone;
export type { SearchFillDuotoneProps };
