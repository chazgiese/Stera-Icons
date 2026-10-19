import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SearchSquareBoldProps = Omit<IconBaseProps, 'children'>;

const SearchSquareBold = memo(
  forwardRef<SVGSVGElement, SearchSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.12 6.75c2.41 0 4.37 1.96 4.37 4.37q-.02 1.14-.53 2.07l1.67 1.68c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-1.68-1.67q-.93.52-2.07.53c-2.41 0-4.37-1.96-4.37-4.37s1.96-4.37 4.37-4.37m0 2c-1.31 0-2.37 1.06-2.37 2.37 0 1.3 1.06 2.37 2.37 2.37 1.3 0 2.37-1.06 2.37-2.37s-1.06-2.37-2.37-2.37" clipRule="evenodd" />
        <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.58 1.13-1.5 2.05-2.63 2.63-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06.77-.07 1.25-.19 1.62-.38.75-.38 1.36-1 1.74-1.74.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchSquareBold.displayName = 'SearchSquareBold';

// Triple export pattern
export { SearchSquareBold, SearchSquareBold as SearchSquareBoldIcon, SearchSquareBold as SiSearchSquareBold };
export default SearchSquareBold;
export type { SearchSquareBoldProps };
