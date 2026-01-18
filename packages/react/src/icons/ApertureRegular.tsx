import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ApertureRegularProps = Omit<IconBaseProps, 'children'>;

const ApertureRegular = memo(
  forwardRef<SVGSVGElement, ApertureRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.73 10.73 0 0 1 10.6 12.53 10.76 10.76 0 0 1-17.44 6.51A10.7 10.7 0 0 1 1.4 10.22 10.76 10.76 0 0 1 12 1.25m2.69 14.04-.09.07-.15.1-.1.08-.16.1-.06.04-.06.03-.02.01L7 19.8a9.2 9.2 0 0 0 7.74 1.04v-5.6zm1.5-4.05.04.37v.02l.01.12v.16l.01.09v8.22a9.3 9.3 0 0 0 4.77-6.19zM2.74 12c0 2.69 1.15 5.1 2.98 6.8l4.84-2.8-.1-.04-.09-.03-.17-.08-.1-.05-.17-.09-.06-.03-.06-.03-7.06-4.08zm9.08-2.75-.18.02h-.02l-.14.03h-.03l-.12.03-.04.01-.16.05h-.01a3 3 0 0 0-.46.2l-.04.02-.05.04q-.3.17-.53.4l-.07.08-.07.08-.2.26-.07.11-.01.03-.02.04-.08.14-.02.04q-.09.2-.15.41l-.05.17q-.06.27-.06.53v.1a3 3 0 0 0 .12.75l.02.07q.07.25.21.48l.05.09.06.1h.01a3 3 0 0 0 .33.41l.07.06a3 3 0 0 0 .66.46l.07.04.28.1v.01l.18.05.17.04.1.02a3 3 0 0 0 1.13-.06l.05-.02.1-.03.09-.03q.2-.07.38-.17l.1-.06.1-.06.07-.05a3 3 0 0 0 .68-.7l.08-.13v-.01h.01v-.02a3 3 0 0 0 .3-.71v-.05a3 3 0 0 0 .07-.86l-.01-.1a3 3 0 0 0-.36-1.05v-.01a3 3 0 0 0-.87-.9l-.07-.05h-.02l-.19-.11-.1-.05-.1-.04-.05-.02-.13-.05a3 3 0 0 0-.7-.13zM7.75 3.78a9.3 9.3 0 0 0-4.77 6.18l4.84 2.8-.02-.1v-.05l-.03-.24v-.08l-.02-.21v-8.3M13.43 8l.04.01.13.05.17.08.1.05.17.09.09.04.06.03 7.05 4.08.01-.43c0-2.69-1.15-5.1-2.98-6.8zM12 2.75q-1.44 0-2.75.42v5.59l.1-.07.06-.06.2-.15q.02 0 .05-.03l.23-.14.05-.03 7.05-4.07A9 9 0 0 0 12 2.75M9.84 8.34l.02-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureRegular.displayName = 'ApertureRegular';

// Triple export pattern (lucide-react style)
export { ApertureRegular, ApertureRegular as ApertureRegularIcon, ApertureRegular as SiApertureRegular };
export type { ApertureRegularProps };
