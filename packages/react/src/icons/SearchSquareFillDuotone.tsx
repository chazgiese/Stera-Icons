import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SearchSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 8a3 3 0 0 1 2.17 5.07l-.05.05-.05.05A2.99 2.99 0 0 1 8 11a3 3 0 0 1 3-3" opacity={0.4} />
        <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 4a5 5 0 1 0 2.54 9.3l2.08 2.08a1.25 1.25 0 0 0 1.76-1.76l-2.07-2.08q.67-1.13.69-2.54a5 5 0 0 0-5-5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 6a5 5 0 0 1 4.3 7.54l2.08 2.08a1.25 1.25 0 0 1-1.76 1.76l-2.08-2.07q-1.13.67-2.54.69a5 5 0 0 1 0-10m0 2a3 3 0 1 0 2.07 5.17l.05-.05.05-.05A3 3 0 0 0 11 8" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareFillDuotone.displayName = 'SearchSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchSquareFillDuotone, SearchSquareFillDuotone as SearchSquareFillDuotoneIcon, SearchSquareFillDuotone as SiSearchSquareFillDuotone };
export type { SearchSquareFillDuotoneProps };
