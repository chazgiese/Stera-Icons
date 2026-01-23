import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-bold-duotone" {...props}>
      <path fill="currentColor" d="M21.81 19.69a1.5 1.5 0 1 1-2.12 2.12l-3.73-3.73a9 9 0 0 0 2.12-2.12z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.75 1.75a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchBoldDuotone.displayName = 'SearchBoldDuotone';

// Triple export pattern (lucide-react style)
export { SearchBoldDuotone, SearchBoldDuotone as SearchBoldDuotoneIcon, SearchBoldDuotone as SiSearchBoldDuotone };
export default SearchBoldDuotone;
export type { SearchBoldDuotoneProps };
