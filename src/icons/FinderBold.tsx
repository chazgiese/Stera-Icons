import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderBoldProps = Omit<IconBaseProps, 'children'>;

const FinderBold = memo(
  forwardRef<SVGSVGElement, FinderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-bold" {...props}>
      <path d="M7.28 6.75a1 1 0 0 1 1 1v1.42a1 1 0 0 1-2 0V7.75a1 1 0 0 1 1-1M15.78 6.75a1 1 0 0 1 1 1v1.42a1 1 0 0 1-2 0V7.75a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M13.3 2.5q1.85-.02 3.04.06c.8.07 1.51.21 2.16.54a5.5 5.5 0 0 1 2.4 2.4c.33.65.47 1.35.54 2.16q.07 1.19.06 3.04v2.6q.02 1.85-.06 3.04c-.07.8-.21 1.51-.54 2.16a5.5 5.5 0 0 1-2.4 2.4c-.65.33-1.35.47-2.16.54a30 30 0 0 1-2.4.06H10.7q-1.85.02-3.04-.06a6 6 0 0 1-2.16-.54 5.5 5.5 0 0 1-2.4-2.4 6 6 0 0 1-.54-2.16q-.08-1.19-.06-3.04v-2.6q-.02-1.85.06-3.04c.07-.8.21-1.51.54-2.16a5.5 5.5 0 0 1 2.4-2.4 6 6 0 0 1 2.16-.54q1.19-.08 3.04-.06zm-2.6 2c-1.28 0-2.17 0-2.87.06a4 4 0 0 0-1.42.32 3.5 3.5 0 0 0-1.53 1.53 4 4 0 0 0-.32 1.42c-.06.7-.06 1.6-.06 2.87v2.6c0 1.28 0 2.17.06 2.87s.16 1.1.32 1.42c.34.66.87 1.2 1.53 1.53.32.16.73.27 1.42.32.7.06 1.6.06 2.87.06h1.78a13 13 0 0 1-.5-1.82c-1.85 0-3.7-.58-5.29-1.73a1 1 0 0 1 1.18-1.62 7 7 0 0 0 3.8 1.34q-.08-.7-.12-1.52a7 7 0 0 1-1.73-.16l-.26-.05-.08-.02h-.02a1 1 0 0 1-.74-1.22 63 63 0 0 1 2.04-6.25l.76-1.95zm2.84.32c-.23.58-.55 1.4-.9 2.34a72 72 0 0 0-1.69 4.97q.35.03.67.02.36-.04.46-.1a1 1 0 0 1 1.45.9q0 1.4.13 2.53 1.31-.32 2.48-1.15a1 1 0 0 1 1.17 1.62 9 9 0 0 1-3.33 1.5 14 14 0 0 0 .64 2.04q.92 0 1.55-.05a4 4 0 0 0 1.42-.32 3.5 3.5 0 0 0 1.53-1.53c.16-.32.27-.73.32-1.42.06-.7.06-1.6.06-2.87v-2.6c0-1.28 0-2.17-.06-2.87a4 4 0 0 0-.32-1.42 3.5 3.5 0 0 0-1.53-1.53 4 4 0 0 0-1.42-.32c-.63-.05-1.42-.06-2.5-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

FinderBold.displayName = 'FinderBold';

// Triple export pattern (lucide-react style)
export { FinderBold, FinderBold as FinderBoldIcon, FinderBold as SiFinderBold };
export default FinderBold;
export type { FinderBoldProps };
