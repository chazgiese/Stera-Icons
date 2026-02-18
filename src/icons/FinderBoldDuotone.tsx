import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FinderBoldDuotone = memo(
  forwardRef<SVGSVGElement, FinderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-bold-duotone" {...props}>
      <path d="M16 2.5A5.5 5.5 0 0 1 21.5 8v8a5.5 5.5 0 0 1-5.5 5.5h-2.12l-.04-.01-.2-.06h-.02l-.2-.12-.02-.01-.07-.06-.02-.01-.02-.02-.06-.07-.01-.02-.06-.08v-.01h-.01v-.01l-.01-.01-.02-.04a4 4 0 0 1-.26-.5 12 12 0 0 1-.55-1.51q-.17-.57-.32-1.28 1 0 2-.22a14 14 0 0 0 .63 2.04H16a3.5 3.5 0 0 0 3.5-3.5V8A3.5 3.5 0 0 0 16 4.5h-2.33l-.12.32c-.24.58-.56 1.4-.91 2.34a72 72 0 0 0-1.69 4.97q.35.03.67.02.36-.04.46-.1a1 1 0 0 1 1.45.9q0 1.4.13 2.53-.98.24-1.99.2-.09-.72-.11-1.53a7 7 0 0 1-1.74-.16l-.26-.05-.08-.02h-.02a1 1 0 0 1-.73-1.22 63 63 0 0 1 2.04-6.25 119 119 0 0 1 1.2-3.08l.08-.19.02-.05v-.01A1 1 0 0 1 13 2.5z" opacity={.4} />
        <path d="M13 2.5a1 1 0 0 0-.92.62l-.01.01-.02.05-.08.2-.28.7-.17.42h-.82c-1.28 0-2.17 0-2.87.06a4 4 0 0 0-1.42.32 3.5 3.5 0 0 0-1.53 1.53 4 4 0 0 0-.32 1.42c-.06.7-.06 1.6-.06 2.87v2.6c0 1.28 0 2.17.06 2.87s.16 1.1.32 1.42c.34.66.87 1.2 1.53 1.53.32.16.73.27 1.42.32.7.06 1.6.06 2.87.06h1.78a11 11 0 0 0 .64 1.47l.02.04v.01h.01c.18.3.5.48.85.48h-3.3q-1.85.02-3.04-.06a6 6 0 0 1-2.16-.54 5.5 5.5 0 0 1-2.4-2.4 6 6 0 0 1-.54-2.16q-.08-1.19-.06-3.04v-2.6q-.02-1.85.06-3.04c.07-.8.21-1.51.54-2.16a5.5 5.5 0 0 1 2.4-2.4 6 6 0 0 1 2.16-.54q1.19-.08 3.04-.06z" />
        <path d="M16.14 14.33a1 1 0 0 1 1.17 1.62 9 9 0 0 1-10.62 0 1 1 0 0 1 1.18-1.62 7 7 0 0 0 8.27 0M7.28 6.75a1 1 0 0 1 1 1v1.42a1 1 0 0 1-2 0V7.75a1 1 0 0 1 1-1M15.78 6.75a1 1 0 0 1 1 1v1.42a1 1 0 0 1-2 0V7.75a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FinderBoldDuotone.displayName = 'FinderBoldDuotone';

// Triple export pattern (lucide-react style)
export { FinderBoldDuotone, FinderBoldDuotone as FinderBoldDuotoneIcon, FinderBoldDuotone as SiFinderBoldDuotone };
export default FinderBoldDuotone;
export type { FinderBoldDuotoneProps };
