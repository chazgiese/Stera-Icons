import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareRegularProps = Omit<IconBaseProps, 'children'>;

const SearchSquareRegular = memo(
  forwardRef<SVGSVGElement, SearchSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.12 7c2.27 0 4.12 1.84 4.12 4.12q-.02 1.17-.59 2.12l1.8 1.8c.4.4.4 1.03 0 1.42-.38.39-1.02.39-1.4 0l-1.81-1.81q-.95.57-2.12.59C8.84 15.24 7 13.39 7 11.12S8.84 7 11.12 7m0 1.5c-1.45 0-2.62 1.17-2.62 2.62 0 1.44 1.17 2.62 2.62 2.62 1.44 0 2.62-1.18 2.62-2.62S12.56 8.5 11.12 8.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-2 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v2c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h2c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-2c0-1.41 0-2.43-.07-3.22-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareRegular.displayName = 'SearchSquareRegular';

// Triple export pattern
export { SearchSquareRegular, SearchSquareRegular as SearchSquareRegularIcon, SearchSquareRegular as SiSearchSquareRegular };
export default SearchSquareRegular;
export type { SearchSquareRegularProps };
