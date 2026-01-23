import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-duotone" {...props}>
      <path fill="currentColor" d="M21.7 20.3a1 1 0 1 1-1.4 1.4l-3.86-3.85q.79-.62 1.41-1.41z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 2.25a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchRegularDuotone.displayName = 'SearchRegularDuotone';

// Triple export pattern (lucide-react style)
export { SearchRegularDuotone, SearchRegularDuotone as SearchRegularDuotoneIcon, SearchRegularDuotone as SiSearchRegularDuotone };
export default SearchRegularDuotone;
export type { SearchRegularDuotoneProps };
