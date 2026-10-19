import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchCircleRegularProps = Omit<IconBaseProps, 'children'>;

const SearchCircleRegular = memo(
  forwardRef<SVGSVGElement, SearchCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.12 7c2.27 0 4.12 1.84 4.12 4.12q-.02 1.17-.59 2.12l1.8 1.8c.4.4.4 1.03 0 1.42-.38.39-1.02.39-1.4 0l-1.81-1.81q-.95.57-2.12.59C8.84 15.24 7 13.39 7 11.12S8.84 7 11.12 7m0 1.5c-1.45 0-2.62 1.17-2.62 2.62 0 1.44 1.17 2.62 2.62 2.62 1.44 0 2.62-1.18 2.62-2.62S12.56 8.5 11.12 8.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleRegular.displayName = 'SearchCircleRegular';

// Triple export pattern
export { SearchCircleRegular, SearchCircleRegular as SearchCircleRegularIcon, SearchCircleRegular as SiSearchCircleRegular };
export default SearchCircleRegular;
export type { SearchCircleRegularProps };
