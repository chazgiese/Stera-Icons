import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderBoldProps = Omit<IconBaseProps, 'children'>;

const FinderBold = memo(
  forwardRef<SVGSVGElement, FinderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-bold" {...props}>
      <path d="M7.56 7a1 1 0 0 1 1 1v1.33a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1M15.56 7a1 1 0 0 1 1 1v1.33a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12.9 3q1.79-.02 2.94.06c.8.07 1.51.21 2.16.54A5.5 5.5 0 0 1 20.4 6c.33.65.47 1.35.54 2.16Q21 9.35 21 11.2v1.6q.02 1.85-.06 3.04c-.07.8-.21 1.51-.54 2.16a5.5 5.5 0 0 1-2.4 2.4c-.65.33-1.35.47-2.16.54a27 27 0 0 1-2.15.06H11.2q-1.85.02-3.04-.06A6 6 0 0 1 6 20.4 5.5 5.5 0 0 1 3.6 18a6 6 0 0 1-.54-2.16Q2.98 14.65 3 12.8v-1.6q-.02-1.85.06-3.04c.07-.8.21-1.51.54-2.16A5.5 5.5 0 0 1 6 3.6a6 6 0 0 1 2.16-.54Q9.35 2.98 11.2 3zm-1.7 2c-1.28 0-2.17 0-2.87.06a4 4 0 0 0-1.42.32 3.5 3.5 0 0 0-1.53 1.53 4 4 0 0 0-.32 1.42C5 9.03 5 9.93 5 11.2v1.6c0 1.28 0 2.17.06 2.87s.16 1.1.32 1.42c.34.66.87 1.2 1.53 1.53.32.16.73.27 1.42.32.7.06 1.6.06 2.87.06h1.09a14 14 0 0 1-.42-1.6 8.6 8.6 0 0 1-4.9-1.63 1 1 0 0 1 1.17-1.62 6.6 6.6 0 0 0 3.43 1.24l-.1-1.3a7 7 0 0 1-1.83-.2l-.07-.02h-.02l-.01-.01a1 1 0 0 1-.73-1.21c.46-1.84 1.25-4.1 1.92-5.89L11.41 5zm2.26.26c-.22.55-.53 1.32-.86 2.2a68 68 0 0 0-1.56 4.61q.29.02.54 0 .34-.02.42-.08a1 1 0 0 1 1.45.9q0 1.3.1 2.32a7 7 0 0 0 2.3-1.06 1 1 0 0 1 1.18 1.62 9 9 0 0 1-3.16 1.43 14 14 0 0 0 .54 1.8q.73-.02 1.26-.06a4 4 0 0 0 1.42-.32 3.5 3.5 0 0 0 1.53-1.53c.16-.32.27-.73.32-1.42.06-.7.06-1.6.06-2.87v-1.6c0-1.28 0-2.17-.06-2.87a4 4 0 0 0-.32-1.42 3.5 3.5 0 0 0-1.53-1.53 4 4 0 0 0-1.42-.32C15.12 5 14.45 5 13.56 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FinderBold.displayName = 'FinderBold';

// Triple export pattern (lucide-react style)
export { FinderBold, FinderBold as FinderBoldIcon, FinderBold as SiFinderBold };
export default FinderBold;
export type { FinderBoldProps };
