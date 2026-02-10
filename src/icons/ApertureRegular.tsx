import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureRegularProps = Omit<IconBaseProps, 'children'>;

const ApertureRegular = memo(
  forwardRef<SVGSVGElement, ApertureRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="aperture" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25A9.7 9.7 0 0 1 21.75 12q0 .83-.13 1.61A9.76 9.76 0 0 1 2.38 10.4 9.76 9.76 0 0 1 12 2.25m2.39 12.83-.02.02-.1.06-.11.09-.14.08-.07.05-.04.02-.03.02-6.23 3.6a8.2 8.2 0 0 0 6.75.87v-4.82zm1.48-3.57.01.13.02.24v7.39a8.3 8.3 0 0 0 4.14-5.4l-4.18-2.41zM3.75 12c0 2.38 1 4.52 2.62 6.02l4.17-2.4-.02-.01-.03-.02-.16-.07-.05-.02-.05-.02-.12-.07-.06-.03-.05-.03-6.25-3.6zm8.24-2.4a2 2 0 0 0-.49.05l-.05.01a2 2 0 0 0-.44.15l-.02.01-.15.08-.03.02h-.01l-.14.09a2.4 2.4 0 0 0-.74.79l-.01.02-.07.12a2.4 2.4 0 0 0-.23 1.22v.08l.01.1.02.1a2 2 0 0 0 .27.73v.01a2.4 2.4 0 0 0 .84.87l.02.01.03.02a2 2 0 0 0 .6.24l.1.03.33.04h.34q.23 0 .45-.07l.04-.01.02-.01a2 2 0 0 0 .42-.17l.06-.03.06-.04a2.5 2.5 0 0 0 .84-.84l.02-.02a2 2 0 0 0 .25-.62l.01-.05.05-.3v-.45l-.07-.38-.01-.06-.03-.1a2 2 0 0 0-.2-.42q0-.02-.02-.05a2.4 2.4 0 0 0-.82-.82l-.02-.01-.03-.02-.13-.07-.09-.04-.06-.03-.12-.05-.05-.01-.15-.05h-.01l-.38-.06h-.12zM8.1 4.73a8.3 8.3 0 0 0-4.14 5.4l4.18 2.41-.02-.12-.01-.16v-.2L8.1 12zm5.36 3.65h.01l.09.04.06.03.1.05.13.07.1.05.05.03 6.24 3.6.01-.25c0-2.38-1-4.52-2.62-6.02zM12 3.75q-1.26 0-2.4.36v4.82l.1-.08.32-.2v-.02l.1-.04 6.23-3.6A8 8 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureRegular.displayName = 'ApertureRegular';

// Triple export pattern (lucide-react style)
export { ApertureRegular, ApertureRegular as ApertureRegularIcon, ApertureRegular as SiApertureRegular };
export default ApertureRegular;
export type { ApertureRegularProps };
