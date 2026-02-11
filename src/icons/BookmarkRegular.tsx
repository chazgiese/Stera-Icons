import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookmarkRegularProps = Omit<IconBaseProps, 'children'>;

const BookmarkRegular = memo(
  forwardRef<SVGSVGElement, BookmarkRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bookmark" {...props}>
      <path fillRule="evenodd" d="M12.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v9.24q0 .89-.03 1.46c-.03.36-.1.79-.39 1.12-.36.43-.9.65-1.47.61-.43-.03-.79-.29-1.06-.52q-.44-.38-1.06-1.01l-2-2c-.41-.41-.68-.68-.91-.88a1 1 0 0 0-.44-.28 1.3 1.3 0 0 0-.78 0c-.1.03-.22.1-.44.28-.23.2-.5.47-.9.87l-2 2q-.64.65-1.07 1.02c-.27.23-.63.49-1.06.52-.56.04-1.1-.18-1.47-.6a2 2 0 0 1-.39-1.13q-.04-.57-.03-1.46V9.4q-.01-1.64.06-2.69t.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-1.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v9.24c0 .62 0 1.03.03 1.33q.03.26.04.3.08.06.18.06.03 0 .24-.17c.23-.19.52-.48.96-.92l2-2q.59-.6 1-.96.44-.38.95-.57a2.8 2.8 0 0 1 1.7 0q.53.19.95.57t1 .95l2 2c.44.45.73.74.96.93q.2.17.24.17.1 0 .17-.07.03-.01.05-.3c.03-.29.03-.7.03-1.32V9.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookmarkRegular.displayName = 'BookmarkRegular';

// Triple export pattern (lucide-react style)
export { BookmarkRegular, BookmarkRegular as BookmarkRegularIcon, BookmarkRegular as SiBookmarkRegular };
export default BookmarkRegular;
export type { BookmarkRegularProps };
