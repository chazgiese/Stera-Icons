import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlaylistRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlaylistRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlaylistRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="playlist-duotone" {...props}>
      <path d="M12 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 7a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 3a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.25 12.9c0-.92.94-1.5 1.75-1.15l.16.08 5.04 3.1c.8.5.8 1.65 0 2.14l-5.04 3.1c-.84.51-1.9-.09-1.91-1.06zm1.5 5.76L21.07 16l-4.32-2.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

PlaylistRegularDuotone.displayName = 'PlaylistRegularDuotone';

// Triple export pattern (lucide-react style)
export { PlaylistRegularDuotone, PlaylistRegularDuotone as PlaylistRegularDuotoneIcon, PlaylistRegularDuotone as SiPlaylistRegularDuotone };
export type { PlaylistRegularDuotoneProps };
