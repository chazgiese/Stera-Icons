import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderFillProps = Omit<IconBaseProps, 'children'>;

const FinderFill = memo(
  forwardRef<SVGSVGElement, FinderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-fill" {...props}>
      <path d="M7.56 7a1 1 0 0 1 1 1v1.33a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12.8 3q1.85-.02 3.04.06c.8.07 1.51.21 2.16.54A5.5 5.5 0 0 1 20.4 6c.33.65.47 1.35.54 2.16Q21 9.35 21 11.2v1.6q.02 1.85-.06 3.04c-.07.8-.21 1.51-.54 2.16a5.5 5.5 0 0 1-2.4 2.4c-.65.33-1.35.47-2.16.54q-1.19.07-3.04.06h-1.6q-1.85.02-3.04-.06A6 6 0 0 1 6 20.4 5.5 5.5 0 0 1 3.6 18a6 6 0 0 1-.54-2.16Q2.98 14.65 3 12.8v-1.6q-.02-1.85.06-3.04c.07-.8.21-1.51.54-2.16A5.5 5.5 0 0 1 6 3.6a6 6 0 0 1 2.16-.54Q9.35 2.98 11.2 3zm-1.6 2c-1.28 0-2.17 0-2.87.06a4 4 0 0 0-1.42.32 3.5 3.5 0 0 0-1.53 1.53 4 4 0 0 0-.32 1.42C5 9.03 5 9.93 5 11.2v1.6c0 1.28 0 2.17.06 2.87s.16 1.1.32 1.42c.34.66.87 1.2 1.53 1.53.32.16.73.27 1.42.32.7.06 1.6.06 2.87.06h1.61q-.22-.64-.43-1.6a8.6 8.6 0 0 1-5.41-1.63 1 1 0 0 1 1.17-1.62 6.6 6.6 0 0 0 3.93 1.25q.13 1.13.31 2a8.6 8.6 0 0 0 4.65-1.63 1 1 0 0 0-1.17-1.62 6.6 6.6 0 0 1-3.79 1.25q-.09-.84-.12-1.86a5 5 0 0 1-.8.04c-.5-.02-.95-.1-1.23-.15a.74.74 0 0 1-.56-.9c.47-1.81 1.24-4 1.88-5.71l.7-1.82zm4.35 2a1 1 0 0 0-1 1v1.33a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

FinderFill.displayName = 'FinderFill';

// Triple export pattern (lucide-react style)
export { FinderFill, FinderFill as FinderFillIcon, FinderFill as SiFinderFill };
export default FinderFill;
export type { FinderFillProps };
