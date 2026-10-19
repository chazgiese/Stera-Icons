import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleFillProps = Omit<IconBaseProps, 'children'>;

const SearchCircleFill = memo(
  forwardRef<SVGSVGElement, SearchCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.12 8.63c1.38 0 2.5 1.11 2.5 2.49s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-.88 5.13c-2.35 0-4.24 1.9-4.24 4.24s1.9 4.24 4.24 4.24q1.15-.01 2.1-.55l1.73 1.73c.44.44 1.16.44 1.6 0 .43-.43.43-1.15 0-1.59l-1.74-1.74q.54-.93.55-2.1c0-2.34-1.9-4.23-4.24-4.23" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleFill.displayName = 'SearchCircleFill';

// Triple export pattern
export { SearchCircleFill, SearchCircleFill as SearchCircleFillIcon, SearchCircleFill as SiSearchCircleFill };
export default SearchCircleFill;
export type { SearchCircleFillProps };
