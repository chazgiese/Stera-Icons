import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M11.12 7a4.12 4.12 0 0 1 3.53 6.24l1.8 1.8a1 1 0 0 1-1.4 1.42l-1.81-1.81A4.12 4.12 0 1 1 11.12 7m0 1.5a2.62 2.62 0 1 0 0 5.24 2.62 2.62 0 0 0 0-5.24" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleRegularDuotone.displayName = 'SearchCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { SearchCircleRegularDuotone, SearchCircleRegularDuotone as SearchCircleRegularDuotoneIcon, SearchCircleRegularDuotone as SiSearchCircleRegularDuotone };
export default SearchCircleRegularDuotone;
export type { SearchCircleRegularDuotoneProps };
