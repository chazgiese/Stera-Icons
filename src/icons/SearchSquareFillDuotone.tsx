import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-square-fill-duotone" {...props}>
      <path d="M11.12 8.75a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74" opacity={0.4} />
        <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-2.48 3.75a4.37 4.37 0 1 0 2.07 8.21l1.68 1.67a1.25 1.25 0 0 0 1.76-1.76l-1.67-1.68q.52-.93.53-2.07a4.37 4.37 0 0 0-4.37-4.37" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M11.12 6.75a4.37 4.37 0 0 1 3.84 6.44l1.67 1.68a1.25 1.25 0 0 1-1.76 1.76l-1.68-1.67q-.93.52-2.07.53a4.37 4.37 0 0 1 0-8.74m0 2a2.37 2.37 0 1 0 0 4.74 2.37 2.37 0 0 0 0-4.74" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareFillDuotone.displayName = 'SearchSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchSquareFillDuotone, SearchSquareFillDuotone as SearchSquareFillDuotoneIcon, SearchSquareFillDuotone as SiSearchSquareFillDuotone };
export default SearchSquareFillDuotone;
export type { SearchSquareFillDuotoneProps };
