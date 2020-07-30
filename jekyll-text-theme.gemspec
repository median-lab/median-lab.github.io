# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-text-theme"
  spec.version       = "2.2.6"
  spec.authors       = ["Median-Lab"]
  spec.email         = ["wanglj7@mail.sustech.edu.cn"]

  spec.summary       = %q{Median Lab Homepage}
  spec.homepage      = "https://github.com/median-lab/median-lab.github.io"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_data|_includes|_layouts|_sass|assets)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.6", "< 5.0"
  spec.add_runtime_dependency "jekyll-paginate-v2", "~> 3.0.0"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.1"
  spec.add_runtime_dependency "jemoji", "~> 0.8"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake", "~> 10.0"
end
