import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 6.25a4.75 4.75 0 0 1 3.99 7.33l2.22 2.21a1 1 0 1 1-1.42 1.42l-2.21-2.22A4.75 4.75 0 1 1 11 6.25m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleRegularDuotone.displayName = 'SearchCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { SearchCircleRegularDuotone, SearchCircleRegularDuotone as SearchCircleRegularDuotoneIcon, SearchCircleRegularDuotone as SiSearchCircleRegularDuotone };
export default SearchCircleRegularDuotone;
export type { SearchCircleRegularDuotoneProps };
