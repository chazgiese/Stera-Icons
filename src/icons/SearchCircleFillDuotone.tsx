import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle-fill-duotone" {...props}>
      <path d="M11.12 8.75a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.88 4.75a4.37 4.37 0 1 0 2.07 8.21l1.68 1.67a1.25 1.25 0 0 0 1.76-1.76l-1.67-1.68q.52-.93.53-2.07a4.37 4.37 0 0 0-4.37-4.37" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.12 6.75a4.37 4.37 0 0 1 3.84 6.44l1.67 1.68a1.25 1.25 0 0 1-1.76 1.76l-1.68-1.67q-.93.52-2.07.53a4.37 4.37 0 0 1 0-8.74m0 2a2.37 2.37 0 1 0 0 4.74 2.37 2.37 0 0 0 0-4.74" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleFillDuotone.displayName = 'SearchCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchCircleFillDuotone, SearchCircleFillDuotone as SearchCircleFillDuotoneIcon, SearchCircleFillDuotone as SiSearchCircleFillDuotone };
export default SearchCircleFillDuotone;
export type { SearchCircleFillDuotoneProps };
