import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-duotone" {...props}>
      <path fillRule="evenodd" d="M2.8 4.78c3.31-.95 5.75-.48 7.38.27a7.5 7.5 0 0 1 2.37 1.74l.03.04.01.01.01.01.05.1.02.02.03.08.02.05q.03.1.03.2V19a.75.75 0 0 1-1.35.45l-.01-.01-.07-.09-.34-.32c-.3-.27-.78-.62-1.43-.92-1.3-.6-3.36-1.04-6.34-.19a.75.75 0 0 1-.96-.72V5.5c0-.33.22-.63.54-.72m6.75 1.63c-1.22-.56-3.11-.98-5.8-.33v10.16a10 10 0 0 1 6.43.5q.61.3 1.07.6V7.6l-.27-.26c-.3-.27-.78-.62-1.43-.92" clipRule="evenodd" />
        <path d="M13.82 5.05c1.63-.75 4.07-1.22 7.39-.27.32.1.54.39.54.72v11.7a.75.75 0 0 1-.96.72c-2.98-.85-5.04-.41-6.34.19a6 6 0 0 0-1.77 1.24l-.07.09-.01.01q.15-.2.15-.45v-1.65q.45-.32 1.07-.6a10 10 0 0 1 6.43-.5V6.07c-2.69-.65-4.58-.23-5.8.33a6 6 0 0 0-1.7 1.18V7.3l-.03-.2-.02-.05-.03-.08-.02-.03-.05-.09-.02-.02-.03-.04a4 4 0 0 0-.55-.56l.03-.02c.4-.35.99-.79 1.8-1.16" opacity={.4} />
    </IconBase>
  ))
);

BookOpenRegularDuotone.displayName = 'BookOpenRegularDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenRegularDuotone, BookOpenRegularDuotone as BookOpenRegularDuotoneIcon, BookOpenRegularDuotone as SiBookOpenRegularDuotone };
export default BookOpenRegularDuotone;
export type { BookOpenRegularDuotoneProps };
