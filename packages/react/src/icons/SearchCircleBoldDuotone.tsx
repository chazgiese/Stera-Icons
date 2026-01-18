import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SearchCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 6a5 5 0 0 1 4.3 7.54l2.08 2.08a1.25 1.25 0 0 1-1.76 1.76l-2.08-2.07q-1.13.67-2.54.69a5 5 0 0 1 0-10m0 2a3 3 0 1 0 2.07 5.17l.05-.05.05-.05A3 3 0 0 0 11 8" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleBoldDuotone.displayName = 'SearchCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { SearchCircleBoldDuotone, SearchCircleBoldDuotone as SearchCircleBoldDuotoneIcon, SearchCircleBoldDuotone as SiSearchCircleBoldDuotone };
export type { SearchCircleBoldDuotoneProps };
