import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureBoldDuotone = memo(
  forwardRef<SVGSVGElement, ApertureBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="m9.67 8.35.12-.07h.01l.05-.03.06-.04 6.26-3.61q.96.55 1.74 1.3L14 8.16l.09.05.07.04.03.02.03.02 6.28 3.62V12q0 1.08-.26 2.07l-3.92-2.26v7.51q-.93.54-2 .85v-4.52l-.09.05-.07.05-.05.02-.02.02h-.01L7.83 19.4q-.96-.54-1.75-1.3L10 15.84l-.08-.05-.02-.01-.06-.03-.03-.02-.04-.03h-.02L3.5 12.09V12q0-1.08.26-2.08l3.92 2.27V4.68q.93-.54 2-.86zM12 9.67l-.28.02-.2.04h-.05l-.2.06-.23.1h-.02l-.14.07-.04.02-.14.09-.14.1-.2.19q-.22.2-.37.48l-.02.02-.02.05q-.12.22-.19.45-.08.3-.09.6l.01.2q0 .17.05.33.01.09.04.18l.02.03q.06.23.18.43l.03.06q.1.15.2.28l.15.17.13.12.25.19.07.04.08.05.08.04.08.04.08.03.3.1.14.03.04.01.2.02.1.01h.27q.23-.02.43-.07l.1-.04.15-.05q.15-.05.27-.12l.07-.04q.19-.12.35-.26l.13-.12q.12-.12.22-.27l.09-.14.02-.03.01-.02.01-.02q.12-.2.19-.42l.05-.16.04-.27.02-.21v-.22l-.01-.13v-.02l-.06-.3-.04-.15-.1-.21-.11-.24-.04-.06-.1-.16-.21-.23-.1-.1-.21-.16-.12-.08-.02-.02h-.02l-.15-.08-.11-.06-.04-.01-.14-.06-.18-.05-.06-.01q-.18-.05-.38-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureBoldDuotone.displayName = 'ApertureBoldDuotone';

// Triple export pattern
export { ApertureBoldDuotone, ApertureBoldDuotone as ApertureBoldDuotoneIcon, ApertureBoldDuotone as SiApertureBoldDuotone };
export default ApertureBoldDuotone;
export type { ApertureBoldDuotoneProps };
