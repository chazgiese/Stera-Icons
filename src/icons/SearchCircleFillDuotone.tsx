import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, SearchCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle-fill-duotone" {...props}>
      <path d="M11 8a3 3 0 0 1 2.17 5.07l-.05.05-.05.05A2.99 2.99 0 0 1 8 11a3 3 0 0 1 3-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-1 5a5 5 0 1 0 2.54 9.3l2.08 2.08a1.25 1.25 0 0 0 1.76-1.76l-2.07-2.08q.67-1.13.69-2.54a5 5 0 0 0-5-5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 6a5 5 0 0 1 4.3 7.54l2.08 2.08a1.25 1.25 0 0 1-1.76 1.76l-2.08-2.07q-1.13.67-2.54.69a5 5 0 0 1 0-10m0 2a3 3 0 1 0 2.07 5.17l.05-.05.05-.05A3 3 0 0 0 11 8" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleFillDuotone.displayName = 'SearchCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { SearchCircleFillDuotone, SearchCircleFillDuotone as SearchCircleFillDuotoneIcon, SearchCircleFillDuotone as SiSearchCircleFillDuotone };
export default SearchCircleFillDuotone;
export type { SearchCircleFillDuotoneProps };
