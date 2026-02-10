import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-fold-duotone" {...props}>
      <path d="M2.8 5.78c3.31-.94 5.75-.48 7.38.27q.66.3 1.13.64l-.03.21a6 6 0 0 0-.02.85v.8400000000000001l-.28-.26c-.3-.27-.78-.62-1.43-.92-1.22-.56-3.11-.98-5.8-.33v10.16a10 10 0 0 1 6.43.5q.61.3 1.07.6V20a1 1 0 0 0 .15.45l-.01-.01-.07-.09-.34-.32c-.3-.27-.78-.62-1.43-.92-1.3-.6-3.36-1.04-6.34-.19a.75.75 0 0 1-.96-.72V6.5c0-.33.22-.62.54-.72M17.75 5.25q1.54 0 3.46.53c.32.1.54.39.54.72v11.7a.75.75 0 0 1-.96.72c-2.98-.85-5.04-.41-6.34.19a6 6 0 0 0-1.77 1.24l-.07.09-.01.01-.06.07a.8.8 0 0 0 .21-.52v-.58q.01-.48.14-1.17.41-.26.93-.5a10 10 0 0 1 6.43-.5V7.07q-1.4-.32-2.5-.33z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17 2.25a.75.75 0 0 1 .75.75v11.03c0 .41-.34.75-.75.75-1.9 0-2.89.81-3.46 1.75a6 6 0 0 0-.79 2.9V20a.75.75 0 1 1-1.5 0V7.7a4 4 0 0 1 .03-.8c.05-.5.19-1.18.52-1.87.34-.7.88-1.4 1.75-1.93.86-.53 1.99-.85 3.45-.85m-.75 1.54q-1.25.14-1.92.59c-.58.35-.95.82-1.18 1.3a4 4 0 0 0-.4 1.95v7.43a5 5 0 0 1 3.5-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldRegularDuotone.displayName = 'BookOpenFoldRegularDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenFoldRegularDuotone, BookOpenFoldRegularDuotone as BookOpenFoldRegularDuotoneIcon, BookOpenFoldRegularDuotone as SiBookOpenFoldRegularDuotone };
export default BookOpenFoldRegularDuotone;
export type { BookOpenFoldRegularDuotoneProps };
