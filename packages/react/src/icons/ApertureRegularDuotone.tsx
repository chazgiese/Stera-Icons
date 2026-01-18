import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ApertureRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ApertureRegularDuotone = memo(
  forwardRef<SVGSVGElement, ApertureRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.25 8.76q.29-.24.6-.42l.03-.02.06-.04L17 4.21q.68.45 1.28 1L13.43 8l.04.02.13.04.45.22.07.04.06.03.02.01 7.04 4.07q-.04.82-.22 1.6l-4.84-2.8.05.4.01.12.01.25v8.21q-.72.38-1.5.62v-5.6l-.08.07-.06.05q-.08.07-.17.12l-.08.06-.16.1-.07.05-.06.03L7 19.8q-.7-.45-1.28-1L10.57 16l-.1-.04q-.05 0-.08-.03l-.08-.03-.1-.05-.1-.04-.18-.1-.05-.03-.06-.03-7.06-4.08q.04-.82.22-1.6l4.84 2.8-.02-.1v-.07l-.03-.23v-.07l-.02-.22v-8.3q.72-.37 1.5-.61zm2.58.5h-.07l-.1.01h-.04l-.13.03h-.03l-.12.03-.04.01a3 3 0 0 0-.63.25l-.03.02h-.02a3 3 0 0 0-.57.44l-.23.28-.03.03q-.1.13-.17.27l-.01.01-.08.15a3 3 0 0 0-.27 1.4v.06l.02.14.02.11q.02.15.07.3l.04.13q.08.21.2.41v.02a3 3 0 0 0 .31.45l.13.14.1.08a3 3 0 0 0 .43.32l.07.04.14.08.03.01a3 3 0 0 0 1.12.27H12a3 3 0 0 0 1.13-.25l.2-.1.2-.11.08-.06.07-.05.3-.26.1-.12.29-.4.01-.03.01-.01a2.7 2.7 0 0 0 0-2.72l-.03-.04a3 3 0 0 0-.3-.42l-.11-.12a3 3 0 0 0-.37-.31l-.02-.01-.14-.1-.08-.04-.18-.1-.13-.05-.07-.03q-.05 0-.11-.04l-.19-.05-.26-.05h-.08l-.18-.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureRegularDuotone.displayName = 'ApertureRegularDuotone';

// Triple export pattern (lucide-react style)
export { ApertureRegularDuotone, ApertureRegularDuotone as ApertureRegularDuotoneIcon, ApertureRegularDuotone as SiApertureRegularDuotone };
export type { ApertureRegularDuotoneProps };
