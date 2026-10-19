import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureFillDuotone = memo(
  forwardRef<SVGSVGElement, ApertureFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.58 20.36q-1.23.38-2.58.39c-1.72 0-3.32-.5-4.67-1.35l6.65-3.84.06-.03.06-.04.16-.1.1-.06.13-.1.09-.07zM20.53 13.95c-.57 2.52-2.23 4.62-4.45 5.8V12l-.01-.24-.01-.14-.02-.13-.02-.14zM9.89 15.49l.07.04.06.03.18.1.04.01.21.1.09.03h.01l-4.5 2.61c-1.73-1.6-2.8-3.88-2.8-6.41v-.34zM7.92 12v.07l.02.22v.08l.03.2v.08l-4.5-2.6c.57-2.52 2.23-4.62 4.45-5.8zM17.95 5.59c1.72 1.6 2.8 3.88 2.8 6.41v.34l-6.63-3.82h-.01l-.02-.02-.05-.03-.08-.04-.15-.08-.13-.06-.14-.06-.1-.04zM12 3.25c1.72 0 3.32.5 4.67 1.35l-6.64 3.83-.06.03q-.28.17-.55.38v-5.2q1.23-.38 2.58-.39" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.75c2.48 0 4.75.88 6.52 2.34 2.28 1.88 3.73 4.73 3.73 7.91q0 .87-.14 1.7c-.6 3.65-3.14 6.64-6.52 7.9q-1.69.64-3.59.65c-2.48 0-4.75-.88-6.52-2.34C3.2 18.03 1.75 15.18 1.75 12q0-.87.14-1.7c.6-3.65 3.14-6.64 6.52-7.9q1.69-.64 3.59-.65m2.49 13.48-.14.1-.09.06-.16.1-.06.04-.06.03-6.65 3.84c1.35.86 2.95 1.35 4.67 1.35q1.35 0 2.58-.39v-5.2zm1.53-3.88.02.14.02.13v.14l.02.24v7.74c2.22-1.17 3.88-3.27 4.45-5.79zM3.25 12c0 2.53 1.07 4.81 2.8 6.41l4.5-2.6h-.01l-.09-.04-.21-.1-.04-.01-.18-.1-.06-.03-.07-.04-6.63-3.83zm4.67-7.75c-2.22 1.18-3.88 3.28-4.45 5.8l4.5 2.6v-.07l-.03-.21v-.08l-.01-.22V4.25m5.53 3.94.09.04.14.06.13.06.15.08.08.04.05.03.02.01 6.63 3.83.01-.34c0-2.53-1.08-4.81-2.8-6.41zM12 3.25q-1.35 0-2.58.39v5.2q.27-.21.55-.38l.06-.03 6.64-3.83c-1.35-.86-2.95-1.35-4.67-1.35" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureFillDuotone.displayName = 'ApertureFillDuotone';

// Triple export pattern
export { ApertureFillDuotone, ApertureFillDuotone as ApertureFillDuotoneIcon, ApertureFillDuotone as SiApertureFillDuotone };
export default ApertureFillDuotone;
export type { ApertureFillDuotoneProps };
