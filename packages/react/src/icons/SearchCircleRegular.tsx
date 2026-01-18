import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SearchCircleRegularProps = Omit<IconBaseProps, 'children'>;

const SearchCircleRegular = memo(
  forwardRef<SVGSVGElement, SearchCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11 6.25a4.75 4.75 0 0 1 3.99 7.33l2.22 2.21a1 1 0 1 1-1.42 1.42l-2.21-2.22A4.75 4.75 0 1 1 11 6.25m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchCircleRegular.displayName = 'SearchCircleRegular';

export { SearchCircleRegular };
export type { SearchCircleRegularProps };
