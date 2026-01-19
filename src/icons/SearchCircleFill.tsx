import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SearchCircleFillProps = Omit<IconBaseProps, 'children'>;

const SearchCircleFill = memo(
  forwardRef<SVGSVGElement, SearchCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="search-circle-fill" {...props}>
      <path fill="currentColor" d="M11 8a3 3 0 0 1 2.17 5.07l-.05.05-.05.05A2.99 2.99 0 0 1 8 11a3 3 0 0 1 3-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-1 5a5 5 0 1 0 2.54 9.3l2.08 2.08a1.25 1.25 0 0 0 1.76-1.76l-2.07-2.08q.67-1.13.69-2.54a5 5 0 0 0-5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleFill.displayName = 'SearchCircleFill';

// Triple export pattern (lucide-react style)
export { SearchCircleFill, SearchCircleFill as SearchCircleFillIcon, SearchCircleFill as SiSearchCircleFill };
export type { SearchCircleFillProps };
