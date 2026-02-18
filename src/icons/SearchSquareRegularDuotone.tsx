import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchSquareRegularDuotone = memo(
  forwardRef<SVGSVGElement, SearchSquareRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-square-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56a5.8 5.8 0 0 1 2.51 2.51c.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27a5.8 5.8 0 0 1-2.51 2.51c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-1c-1.39 0-2.47 0-3.34-.07a6 6 0 0 1-2.27-.56 5.8 5.8 0 0 1-2.51-2.51 6 6 0 0 1-.56-2.27c-.07-.87-.07-1.95-.07-3.34v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27a5.8 5.8 0 0 1 2.51-2.51 6 6 0 0 1 2.27-.56c.87-.07 1.95-.07 3.34-.07zm-1 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v1c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-1c0-1.41 0-2.43-.07-3.22a5 5 0 0 0-.4-1.71 4.3 4.3 0 0 0-1.85-1.86 5 5 0 0 0-1.7-.4c-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M11.12 7a4.12 4.12 0 0 1 3.53 6.24l1.8 1.8a1 1 0 0 1-1.4 1.42l-1.81-1.81A4.12 4.12 0 1 1 11.12 7m0 1.5a2.62 2.62 0 1 0 0 5.24 2.62 2.62 0 0 0 0-5.24" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareRegularDuotone.displayName = 'SearchSquareRegularDuotone';

// Triple export pattern (lucide-react style)
export { SearchSquareRegularDuotone, SearchSquareRegularDuotone as SearchSquareRegularDuotoneIcon, SearchSquareRegularDuotone as SiSearchSquareRegularDuotone };
export default SearchSquareRegularDuotone;
export type { SearchSquareRegularDuotoneProps };
