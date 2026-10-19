import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareFillProps = Omit<IconBaseProps, 'children'>;

const SearchSquareFill = memo(
  forwardRef<SVGSVGElement, SearchSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.12 8.63c1.38 0 2.5 1.11 2.5 2.49s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
        <path fillRule="evenodd" d="M13 2.13c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v2c0 1.39 0 2.48-.07 3.36s-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-2c-1.39 0-2.48 0-3.36-.07s-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-2c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-1.88 4.75c-2.35 0-4.24 1.9-4.24 4.24s1.9 4.24 4.24 4.24q1.15-.01 2.1-.55l1.73 1.73c.44.44 1.16.44 1.6 0 .43-.43.43-1.15 0-1.59l-1.74-1.74q.54-.93.55-2.1c0-2.34-1.9-4.23-4.24-4.23" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareFill.displayName = 'SearchSquareFill';

// Triple export pattern
export { SearchSquareFill, SearchSquareFill as SearchSquareFillIcon, SearchSquareFill as SiSearchSquareFill };
export default SearchSquareFill;
export type { SearchSquareFillProps };
