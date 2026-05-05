/* ============================================================================
 * Content Loader
 * ============================================================================
 * Loads and validates raw content files into typed domain models.
 */

import type { MediaPost, TextPost } from "../content-models/post";
import type { Project } from "../content-models/project";
import type { Album } from "../content-models/album";

/* --------------------------------------------------------------------------
 * Generic loader


async function loadJsonFiles<T>(glob: string): Promise<T[]> {
  const modules = import.meta.glob(glob, { eager: true });

  return Object.values(modules).map((mod: any) => {
    if (!mod.default) {
      throw new Error("Content file missing default export");
    }
    return mod.default as T;
  });
}

* -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
 * Public loaders
 * -------------------------------------------------------------------------- */

export async function loadTextPosts(): Promise<TextPost[]> {
  const modules = import.meta.glob("/src/content/posts/text/*.json", { eager: true });

  return Object.values(modules).map((mod: any) => {
    if (!mod.default) {
      throw new Error("Content file missing default export");
    }
    return mod.default as TextPost;
  });
}

export async function loadMediaPosts(): Promise<MediaPost[]> {
  const modules = import.meta.glob("/src/content/posts/media/*.json", { eager: true });

  return Object.values(modules).map((mod: any) => {
    if (!mod.default) {
      throw new Error("Content file missing default export");
    }
    return mod.default as MediaPost;
  });
}

export async function loadProjects(): Promise<Project[]> {
    const modules = import.meta.glob("/src/content/project/*.json", { eager: true });

  return Object.values(modules).map((mod: any) => {
    if (!mod.default) {
      throw new Error("Content file missing default export");
    }
    return mod.default as Project;
  });
}

export async function loadAlbums(): Promise<Album[]> {
    const modules = import.meta.glob("/src/content/albums/*.json", { eager: true });

  return Object.values(modules).map((mod: any) => {
    if (!mod.default) {
      throw new Error("Content file missing default export");
    }
    return mod.default as Album;
  });
}